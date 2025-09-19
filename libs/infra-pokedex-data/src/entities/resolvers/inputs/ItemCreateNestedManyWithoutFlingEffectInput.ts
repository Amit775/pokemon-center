import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateManyFlingEffectInputEnvelope } from "../inputs/ItemCreateManyFlingEffectInputEnvelope";
import { ItemCreateOrConnectWithoutFlingEffectInput } from "../inputs/ItemCreateOrConnectWithoutFlingEffectInput";
import { ItemCreateWithoutFlingEffectInput } from "../inputs/ItemCreateWithoutFlingEffectInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateNestedManyWithoutFlingEffectInput", {})
export class ItemCreateNestedManyWithoutFlingEffectInput {
  @TypeGraphQL.Field(_type => [ItemCreateWithoutFlingEffectInput], {
    nullable: true
  })
  create?: ItemCreateWithoutFlingEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCreateOrConnectWithoutFlingEffectInput], {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutFlingEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemCreateManyFlingEffectInputEnvelope, {
    nullable: true
  })
  createMany?: ItemCreateManyFlingEffectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemWhereUniqueInput[] | undefined;
}
