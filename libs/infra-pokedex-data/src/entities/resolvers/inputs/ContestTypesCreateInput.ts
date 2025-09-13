import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsCreateNestedManyWithoutContestTypeInput } from "../inputs/BerryFlavorsCreateNestedManyWithoutContestTypeInput";
import { MovesCreateNestedManyWithoutContestTypeInput } from "../inputs/MovesCreateNestedManyWithoutContestTypeInput";

@TypeGraphQL.InputType("ContestTypesCreateInput", {})
export class ContestTypesCreateInput {
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

  @TypeGraphQL.Field(_type => BerryFlavorsCreateNestedManyWithoutContestTypeInput, {
    nullable: true
  })
  berryFlavors?: BerryFlavorsCreateNestedManyWithoutContestTypeInput | undefined;
}
