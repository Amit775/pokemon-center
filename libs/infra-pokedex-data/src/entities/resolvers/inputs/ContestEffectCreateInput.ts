import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedManyWithoutContestEffectInput } from "../inputs/MoveCreateNestedManyWithoutContestEffectInput";

@TypeGraphQL.InputType("ContestEffectCreateInput", {})
export class ContestEffectCreateInput {
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

  @TypeGraphQL.Field(_type => MoveCreateNestedManyWithoutContestEffectInput, {
    nullable: true
  })
  moves?: MoveCreateNestedManyWithoutContestEffectInput | undefined;
}
