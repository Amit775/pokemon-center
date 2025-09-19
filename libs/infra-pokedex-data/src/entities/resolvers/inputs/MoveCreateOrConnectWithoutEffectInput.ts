import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutEffectInput } from "../inputs/MoveCreateWithoutEffectInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateOrConnectWithoutEffectInput", {})
export class MoveCreateOrConnectWithoutEffectInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutEffectInput, {
    nullable: false
  })
  create!: MoveCreateWithoutEffectInput;
}
