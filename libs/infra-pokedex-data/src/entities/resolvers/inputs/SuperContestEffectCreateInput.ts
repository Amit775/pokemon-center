import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedManyWithoutSuperContestEffectInput } from "../inputs/MoveCreateNestedManyWithoutSuperContestEffectInput";

@TypeGraphQL.InputType("SuperContestEffectCreateInput", {})
export class SuperContestEffectCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  appeal!: number;

  @TypeGraphQL.Field(_type => MoveCreateNestedManyWithoutSuperContestEffectInput, {
    nullable: true
  })
  moves?: MoveCreateNestedManyWithoutSuperContestEffectInput | undefined;
}
