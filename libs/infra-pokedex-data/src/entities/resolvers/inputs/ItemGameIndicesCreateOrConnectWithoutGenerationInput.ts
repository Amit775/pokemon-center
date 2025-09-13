import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndicesCreateWithoutGenerationInput } from "../inputs/ItemGameIndicesCreateWithoutGenerationInput";
import { ItemGameIndicesWhereUniqueInput } from "../inputs/ItemGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndicesCreateOrConnectWithoutGenerationInput", {})
export class ItemGameIndicesCreateOrConnectWithoutGenerationInput {
  @TypeGraphQL.Field(_type => ItemGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemGameIndicesCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: ItemGameIndicesCreateWithoutGenerationInput;
}
