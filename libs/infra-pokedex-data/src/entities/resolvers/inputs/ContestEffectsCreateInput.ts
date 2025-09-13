import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateNestedManyWithoutContestEffectInput } from "../inputs/MovesCreateNestedManyWithoutContestEffectInput";

@TypeGraphQL.InputType("ContestEffectsCreateInput", {})
export class ContestEffectsCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  appeal!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  jam!: number;

  @TypeGraphQL.Field(_type => MovesCreateNestedManyWithoutContestEffectInput, {
    nullable: true
  })
  moves?: MovesCreateNestedManyWithoutContestEffectInput | undefined;
}
