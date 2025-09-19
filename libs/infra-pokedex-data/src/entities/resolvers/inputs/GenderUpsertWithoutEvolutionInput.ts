import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenderCreateWithoutEvolutionInput } from "../inputs/GenderCreateWithoutEvolutionInput";
import { GenderUpdateWithoutEvolutionInput } from "../inputs/GenderUpdateWithoutEvolutionInput";
import { GenderWhereInput } from "../inputs/GenderWhereInput";

@TypeGraphQL.InputType("GenderUpsertWithoutEvolutionInput", {})
export class GenderUpsertWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => GenderUpdateWithoutEvolutionInput, {
    nullable: false
  })
  update!: GenderUpdateWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => GenderCreateWithoutEvolutionInput, {
    nullable: false
  })
  create!: GenderCreateWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => GenderWhereInput, {
    nullable: true
  })
  where?: GenderWhereInput | undefined;
}
