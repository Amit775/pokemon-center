import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryCreateManyPocketInput } from "../inputs/ItemCategoryCreateManyPocketInput";

@TypeGraphQL.InputType("ItemCategoryCreateManyPocketInputEnvelope", {})
export class ItemCategoryCreateManyPocketInputEnvelope {
  @TypeGraphQL.Field(_type => [ItemCategoryCreateManyPocketInput], {
    nullable: false
  })
  data!: ItemCategoryCreateManyPocketInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
