import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateWithoutEffectInput } from "../inputs/MoveUpdateWithoutEffectInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateWithWhereUniqueWithoutEffectInput", {})
export class MoveUpdateWithWhereUniqueWithoutEffectInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutEffectInput, {
    nullable: false
  })
  data!: MoveUpdateWithoutEffectInput;
}
