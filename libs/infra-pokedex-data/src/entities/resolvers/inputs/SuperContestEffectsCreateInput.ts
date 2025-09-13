import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateNestedManyWithoutSuperContestEffectInput } from "../inputs/MovesCreateNestedManyWithoutSuperContestEffectInput";

@TypeGraphQL.InputType("SuperContestEffectsCreateInput", {})
export class SuperContestEffectsCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  appeal!: number;

  @TypeGraphQL.Field(_type => MovesCreateNestedManyWithoutSuperContestEffectInput, {
    nullable: true
  })
  moves?: MovesCreateNestedManyWithoutSuperContestEffectInput | undefined;
}
