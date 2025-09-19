import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndexCreateManyItemInputEnvelope } from "../inputs/ItemGameIndexCreateManyItemInputEnvelope";
import { ItemGameIndexCreateOrConnectWithoutItemInput } from "../inputs/ItemGameIndexCreateOrConnectWithoutItemInput";
import { ItemGameIndexCreateWithoutItemInput } from "../inputs/ItemGameIndexCreateWithoutItemInput";
import { ItemGameIndexWhereUniqueInput } from "../inputs/ItemGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndexCreateNestedManyWithoutItemInput", {})
export class ItemGameIndexCreateNestedManyWithoutItemInput {
  @TypeGraphQL.Field(_type => [ItemGameIndexCreateWithoutItemInput], {
    nullable: true
  })
  create?: ItemGameIndexCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: ItemGameIndexCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: ItemGameIndexCreateManyItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemGameIndexWhereUniqueInput[] | undefined;
}
