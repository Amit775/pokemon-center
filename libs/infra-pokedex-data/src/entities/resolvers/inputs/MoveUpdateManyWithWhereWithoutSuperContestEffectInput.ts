import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveScalarWhereInput } from "../inputs/MoveScalarWhereInput";
import { MoveUpdateManyMutationInput } from "../inputs/MoveUpdateManyMutationInput";

@TypeGraphQL.InputType("MoveUpdateManyWithWhereWithoutSuperContestEffectInput", {})
export class MoveUpdateManyWithWhereWithoutSuperContestEffectInput {
  @TypeGraphQL.Field(_type => MoveScalarWhereInput, {
    nullable: false
  })
  where!: MoveScalarWhereInput;

  @TypeGraphQL.Field(_type => MoveUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveUpdateManyMutationInput;
}
