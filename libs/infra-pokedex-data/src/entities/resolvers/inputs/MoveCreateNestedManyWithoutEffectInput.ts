import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyEffectInputEnvelope } from "../inputs/MoveCreateManyEffectInputEnvelope";
import { MoveCreateOrConnectWithoutEffectInput } from "../inputs/MoveCreateOrConnectWithoutEffectInput";
import { MoveCreateWithoutEffectInput } from "../inputs/MoveCreateWithoutEffectInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateNestedManyWithoutEffectInput", {})
export class MoveCreateNestedManyWithoutEffectInput {
  @TypeGraphQL.Field(_type => [MoveCreateWithoutEffectInput], {
    nullable: true
  })
  create?: MoveCreateWithoutEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveCreateOrConnectWithoutEffectInput], {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveCreateManyEffectInputEnvelope, {
    nullable: true
  })
  createMany?: MoveCreateManyEffectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveWhereUniqueInput[] | undefined;
}
