import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedManyWithoutTargetInput } from "../inputs/MoveCreateNestedManyWithoutTargetInput";

@TypeGraphQL.InputType("MoveTargetCreateInput", {})
export class MoveTargetCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => MoveCreateNestedManyWithoutTargetInput, {
    nullable: true
  })
  moves?: MoveCreateNestedManyWithoutTargetInput | undefined;
}
