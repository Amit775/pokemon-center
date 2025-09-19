import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupCreateWithoutSpeciesInput } from "../inputs/EggGroupCreateWithoutSpeciesInput";
import { EggGroupWhereUniqueInput } from "../inputs/EggGroupWhereUniqueInput";

@TypeGraphQL.InputType("EggGroupCreateOrConnectWithoutSpeciesInput", {})
export class EggGroupCreateOrConnectWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EggGroupWhereUniqueInput, {
    nullable: false
  })
  where!: EggGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => EggGroupCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: EggGroupCreateWithoutSpeciesInput;
}
