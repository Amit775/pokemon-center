import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateManyWithoutContestTypeNestedInput } from "../inputs/MoveUpdateManyWithoutContestTypeNestedInput";

@TypeGraphQL.InputType("ContestTypeUpdateWithoutBerryFlavorsInput", {})
export class ContestTypeUpdateWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateManyWithoutContestTypeNestedInput, {
    nullable: true
  })
  moves?: MoveUpdateManyWithoutContestTypeNestedInput | undefined;
}
