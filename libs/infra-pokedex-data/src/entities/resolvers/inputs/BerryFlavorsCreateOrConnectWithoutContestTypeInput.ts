import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsCreateWithoutContestTypeInput } from "../inputs/BerryFlavorsCreateWithoutContestTypeInput";
import { BerryFlavorsWhereUniqueInput } from "../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorsCreateOrConnectWithoutContestTypeInput", {})
export class BerryFlavorsCreateOrConnectWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => BerryFlavorsWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorsCreateWithoutContestTypeInput, {
    nullable: false
  })
  create!: BerryFlavorsCreateWithoutContestTypeInput;
}
