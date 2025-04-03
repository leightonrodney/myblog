import type { Schema, Struct } from '@strapi/strapi';

export interface CtaCta extends Struct.ComponentSchema {
  collectionName: 'components_cta_ctas';
  info: {
    displayName: 'cta';
    icon: 'volumeUp';
  };
  attributes: {
    ctaBgColor: Schema.Attribute.String & Schema.Attribute.Required;
    ctaBtnBgColor: Schema.Attribute.String & Schema.Attribute.Required;
    ctaBtnText: Schema.Attribute.String & Schema.Attribute.Required;
    ctaBtnUrl: Schema.Attribute.String & Schema.Attribute.Required;
    ctaHeading: Schema.Attribute.String & Schema.Attribute.Required;
    ctaImage: Schema.Attribute.Media<'images'>;
    ctaIsExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    ctaSubHeading: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cta.cta': CtaCta;
    }
  }
}
