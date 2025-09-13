import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyEffectInputEnvelope } from "../inputs/MovesCreateManyEffectInputEnvelope";
import { MovesCreateOrConnectWithoutEffectInput } from "../inputs/MovesCreateOrConnectWithoutEffectInput";
import { MovesCreateWithoutEffectInput } from "../inputs/MovesCreateWithoutEffectInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedManyWithoutEffectInput", {})
export class MovesCreateNestedManyWithoutEffectInput {
  @TypeGraphQL.Field(_type => [MovesCreateWithoutEffectInput], {
    nullable: true
  })
  create?: MovesCreateWithoutEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesCreateOrConnectWithoutEffectInput], {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesCreateManyEffectInputEnvelope, {
    nullable: true
  })
  createMany?: MovesCreateManyEffectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  connect?: MovesWhereUniqueInput[] | undefined;
}
