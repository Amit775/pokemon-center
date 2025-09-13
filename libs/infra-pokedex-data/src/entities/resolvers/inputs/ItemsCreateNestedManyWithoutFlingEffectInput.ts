import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateManyFlingEffectInputEnvelope } from "../inputs/ItemsCreateManyFlingEffectInputEnvelope";
import { ItemsCreateOrConnectWithoutFlingEffectInput } from "../inputs/ItemsCreateOrConnectWithoutFlingEffectInput";
import { ItemsCreateWithoutFlingEffectInput } from "../inputs/ItemsCreateWithoutFlingEffectInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateNestedManyWithoutFlingEffectInput", {})
export class ItemsCreateNestedManyWithoutFlingEffectInput {
  @TypeGraphQL.Field(_type => [ItemsCreateWithoutFlingEffectInput], {
    nullable: true
  })
  create?: ItemsCreateWithoutFlingEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsCreateOrConnectWithoutFlingEffectInput], {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutFlingEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateManyFlingEffectInputEnvelope, {
    nullable: true
  })
  createMany?: ItemsCreateManyFlingEffectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemsWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput[] | undefined;
}
