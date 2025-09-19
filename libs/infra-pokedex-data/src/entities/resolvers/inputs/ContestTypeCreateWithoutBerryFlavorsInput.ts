import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedManyWithoutContestTypeInput } from "../inputs/MoveCreateNestedManyWithoutContestTypeInput";

@TypeGraphQL.InputType("ContestTypeCreateWithoutBerryFlavorsInput", {})
export class ContestTypeCreateWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => MoveCreateNestedManyWithoutContestTypeInput, {
    nullable: true
  })
  moves?: MoveCreateNestedManyWithoutContestTypeInput | undefined;
}
