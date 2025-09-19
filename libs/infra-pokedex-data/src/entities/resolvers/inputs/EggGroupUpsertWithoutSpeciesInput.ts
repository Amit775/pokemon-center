import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupCreateWithoutSpeciesInput } from "../inputs/EggGroupCreateWithoutSpeciesInput";
import { EggGroupUpdateWithoutSpeciesInput } from "../inputs/EggGroupUpdateWithoutSpeciesInput";
import { EggGroupWhereInput } from "../inputs/EggGroupWhereInput";

@TypeGraphQL.InputType("EggGroupUpsertWithoutSpeciesInput", {})
export class EggGroupUpsertWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EggGroupUpdateWithoutSpeciesInput, {
    nullable: false
  })
  update!: EggGroupUpdateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => EggGroupCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: EggGroupCreateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => EggGroupWhereInput, {
    nullable: true
  })
  where?: EggGroupWhereInput | undefined;
}
