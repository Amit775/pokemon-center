import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupUpdateWithoutSpeciesInput } from "../inputs/EggGroupUpdateWithoutSpeciesInput";
import { EggGroupWhereInput } from "../inputs/EggGroupWhereInput";

@TypeGraphQL.InputType("EggGroupUpdateToOneWithWhereWithoutSpeciesInput", {})
export class EggGroupUpdateToOneWithWhereWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EggGroupWhereInput, {
    nullable: true
  })
  where?: EggGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupUpdateWithoutSpeciesInput, {
    nullable: false
  })
  data!: EggGroupUpdateWithoutSpeciesInput;
}
