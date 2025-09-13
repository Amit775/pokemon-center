import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndicesCreateWithoutGenerationInput } from "../inputs/ItemGameIndicesCreateWithoutGenerationInput";
import { ItemGameIndicesUpdateWithoutGenerationInput } from "../inputs/ItemGameIndicesUpdateWithoutGenerationInput";
import { ItemGameIndicesWhereUniqueInput } from "../inputs/ItemGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndicesUpsertWithWhereUniqueWithoutGenerationInput", {})
export class ItemGameIndicesUpsertWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => ItemGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemGameIndicesUpdateWithoutGenerationInput, {
    nullable: false
  })
  update!: ItemGameIndicesUpdateWithoutGenerationInput;

  @TypeGraphQL.Field(_type => ItemGameIndicesCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: ItemGameIndicesCreateWithoutGenerationInput;
}
