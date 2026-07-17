import { registerEnumType } from '@nestjs/graphql';

export enum BerriesScalarFieldEnum {
    id = "id",
    item_id = "item_id",
    firmness_id = "firmness_id",
    natural_gift_power = "natural_gift_power",
    natural_gift_type_id = "natural_gift_type_id",
    size = "size",
    max_harvest = "max_harvest",
    growth_time = "growth_time",
    soil_dryness = "soil_dryness",
    smoothness = "smoothness"
}


registerEnumType(BerriesScalarFieldEnum, { name: 'BerriesScalarFieldEnum', description: undefined })
