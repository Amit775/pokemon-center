import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypeCreateWithoutBerryFlavorsInput } from "../inputs/ContestTypeCreateWithoutBerryFlavorsInput";
import { ContestTypeUpdateWithoutBerryFlavorsInput } from "../inputs/ContestTypeUpdateWithoutBerryFlavorsInput";
import { ContestTypeWhereInput } from "../inputs/ContestTypeWhereInput";

@TypeGraphQL.InputType("ContestTypeUpsertWithoutBerryFlavorsInput", {})
export class ContestTypeUpsertWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => ContestTypeUpdateWithoutBerryFlavorsInput, {
    nullable: false
  })
  update!: ContestTypeUpdateWithoutBerryFlavorsInput;

  @TypeGraphQL.Field(_type => ContestTypeCreateWithoutBerryFlavorsInput, {
    nullable: false
  })
  create!: ContestTypeCreateWithoutBerryFlavorsInput;

  @TypeGraphQL.Field(_type => ContestTypeWhereInput, {
    nullable: true
  })
  where?: ContestTypeWhereInput | undefined;
}
