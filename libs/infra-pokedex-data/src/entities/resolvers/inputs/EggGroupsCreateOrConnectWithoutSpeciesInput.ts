import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupsCreateWithoutSpeciesInput } from "../inputs/EggGroupsCreateWithoutSpeciesInput";
import { EggGroupsWhereUniqueInput } from "../inputs/EggGroupsWhereUniqueInput";

@TypeGraphQL.InputType("EggGroupsCreateOrConnectWithoutSpeciesInput", {})
export class EggGroupsCreateOrConnectWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EggGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: EggGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EggGroupsCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: EggGroupsCreateWithoutSpeciesInput;
}
