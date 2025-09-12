import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaScalarWhereInput } from "../inputs/MoveMetaScalarWhereInput";
import { MoveMetaUpdateManyMutationInput } from "../inputs/MoveMetaUpdateManyMutationInput";

@TypeGraphQL.InputType("MoveMetaUpdateManyWithWhereWithoutMetaAilmentInput", {})
export class MoveMetaUpdateManyWithWhereWithoutMetaAilmentInput {
  @TypeGraphQL.Field(_type => MoveMetaScalarWhereInput, {
    nullable: false
  })
  where!: MoveMetaScalarWhereInput;

  @TypeGraphQL.Field(_type => MoveMetaUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveMetaUpdateManyMutationInput;
}
