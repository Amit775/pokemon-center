import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsUpdateWithoutContestTypeInput } from "../inputs/BerryFlavorsUpdateWithoutContestTypeInput";
import { BerryFlavorsWhereUniqueInput } from "../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorsUpdateWithWhereUniqueWithoutContestTypeInput", {})
export class BerryFlavorsUpdateWithWhereUniqueWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => BerryFlavorsWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorsUpdateWithoutContestTypeInput, {
    nullable: false
  })
  data!: BerryFlavorsUpdateWithoutContestTypeInput;
}
