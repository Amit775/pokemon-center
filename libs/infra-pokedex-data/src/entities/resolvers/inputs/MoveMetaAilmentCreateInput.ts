import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateNestedManyWithoutMetaAilmentInput } from "../inputs/MoveMetaCreateNestedManyWithoutMetaAilmentInput";

@TypeGraphQL.InputType("MoveMetaAilmentCreateInput", {})
export class MoveMetaAilmentCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => MoveMetaCreateNestedManyWithoutMetaAilmentInput, {
    nullable: true
  })
  meta?: MoveMetaCreateNestedManyWithoutMetaAilmentInput | undefined;
}
