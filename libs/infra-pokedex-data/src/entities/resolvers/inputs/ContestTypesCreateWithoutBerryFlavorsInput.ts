import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateNestedManyWithoutContestTypeInput } from "../inputs/MovesCreateNestedManyWithoutContestTypeInput";

@TypeGraphQL.InputType("ContestTypesCreateWithoutBerryFlavorsInput", {})
export class ContestTypesCreateWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => MovesCreateNestedManyWithoutContestTypeInput, {
    nullable: true
  })
  moves?: MovesCreateNestedManyWithoutContestTypeInput | undefined;
}
