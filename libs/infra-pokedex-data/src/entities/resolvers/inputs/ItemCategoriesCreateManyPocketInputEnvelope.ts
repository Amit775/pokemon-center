import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesCreateManyPocketInput } from "../inputs/ItemCategoriesCreateManyPocketInput";

@TypeGraphQL.InputType("ItemCategoriesCreateManyPocketInputEnvelope", {})
export class ItemCategoriesCreateManyPocketInputEnvelope {
  @TypeGraphQL.Field(_type => [ItemCategoriesCreateManyPocketInput], {
    nullable: false
  })
  data!: ItemCategoriesCreateManyPocketInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
