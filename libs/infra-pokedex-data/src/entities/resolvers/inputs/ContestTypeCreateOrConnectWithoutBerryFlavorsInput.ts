import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypeCreateWithoutBerryFlavorsInput } from "../inputs/ContestTypeCreateWithoutBerryFlavorsInput";
import { ContestTypeWhereUniqueInput } from "../inputs/ContestTypeWhereUniqueInput";

@TypeGraphQL.InputType("ContestTypeCreateOrConnectWithoutBerryFlavorsInput", {})
export class ContestTypeCreateOrConnectWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => ContestTypeWhereUniqueInput, {
    nullable: false
  })
  where!: ContestTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestTypeCreateWithoutBerryFlavorsInput, {
    nullable: false
  })
  create!: ContestTypeCreateWithoutBerryFlavorsInput;
}
