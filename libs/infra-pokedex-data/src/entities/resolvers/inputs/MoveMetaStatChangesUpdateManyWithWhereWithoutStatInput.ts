import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesScalarWhereInput } from "../inputs/MoveMetaStatChangesScalarWhereInput";
import { MoveMetaStatChangesUpdateManyMutationInput } from "../inputs/MoveMetaStatChangesUpdateManyMutationInput";

@TypeGraphQL.InputType("MoveMetaStatChangesUpdateManyWithWhereWithoutStatInput", {})
export class MoveMetaStatChangesUpdateManyWithWhereWithoutStatInput {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesScalarWhereInput, {
    nullable: false
  })
  where!: MoveMetaStatChangesScalarWhereInput;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveMetaStatChangesUpdateManyMutationInput;
}
