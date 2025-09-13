import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateWithoutSuperContestEffectInput } from "../inputs/MovesUpdateWithoutSuperContestEffectInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateWithWhereUniqueWithoutSuperContestEffectInput", {})
export class MovesUpdateWithWhereUniqueWithoutSuperContestEffectInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutSuperContestEffectInput, {
    nullable: false
  })
  data!: MovesUpdateWithoutSuperContestEffectInput;
}
