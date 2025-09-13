import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndicesCreateManyItemInputEnvelope } from "../inputs/ItemGameIndicesCreateManyItemInputEnvelope";
import { ItemGameIndicesCreateOrConnectWithoutItemInput } from "../inputs/ItemGameIndicesCreateOrConnectWithoutItemInput";
import { ItemGameIndicesCreateWithoutItemInput } from "../inputs/ItemGameIndicesCreateWithoutItemInput";
import { ItemGameIndicesWhereUniqueInput } from "../inputs/ItemGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndicesCreateNestedManyWithoutItemInput", {})
export class ItemGameIndicesCreateNestedManyWithoutItemInput {
  @TypeGraphQL.Field(_type => [ItemGameIndicesCreateWithoutItemInput], {
    nullable: true
  })
  create?: ItemGameIndicesCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: ItemGameIndicesCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: ItemGameIndicesCreateManyItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemGameIndicesWhereUniqueInput[] | undefined;
}
