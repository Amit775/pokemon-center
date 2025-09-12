import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndicesCreateManyGenerationInputEnvelope } from "../inputs/ItemGameIndicesCreateManyGenerationInputEnvelope";
import { ItemGameIndicesCreateOrConnectWithoutGenerationInput } from "../inputs/ItemGameIndicesCreateOrConnectWithoutGenerationInput";
import { ItemGameIndicesCreateWithoutGenerationInput } from "../inputs/ItemGameIndicesCreateWithoutGenerationInput";
import { ItemGameIndicesWhereUniqueInput } from "../inputs/ItemGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndicesCreateNestedManyWithoutGenerationInput", {})
export class ItemGameIndicesCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [ItemGameIndicesCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: ItemGameIndicesCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: ItemGameIndicesCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: ItemGameIndicesCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemGameIndicesWhereUniqueInput[] | undefined;
}
