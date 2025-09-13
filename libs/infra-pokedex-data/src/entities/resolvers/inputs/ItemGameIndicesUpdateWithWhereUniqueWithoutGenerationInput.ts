import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndicesUpdateWithoutGenerationInput } from "../inputs/ItemGameIndicesUpdateWithoutGenerationInput";
import { ItemGameIndicesWhereUniqueInput } from "../inputs/ItemGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndicesUpdateWithWhereUniqueWithoutGenerationInput", {})
export class ItemGameIndicesUpdateWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => ItemGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemGameIndicesUpdateWithoutGenerationInput, {
    nullable: false
  })
  data!: ItemGameIndicesUpdateWithoutGenerationInput;
}
