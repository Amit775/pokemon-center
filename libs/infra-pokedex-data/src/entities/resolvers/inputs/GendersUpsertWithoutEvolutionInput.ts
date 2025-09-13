import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GendersCreateWithoutEvolutionInput } from "../inputs/GendersCreateWithoutEvolutionInput";
import { GendersUpdateWithoutEvolutionInput } from "../inputs/GendersUpdateWithoutEvolutionInput";
import { GendersWhereInput } from "../inputs/GendersWhereInput";

@TypeGraphQL.InputType("GendersUpsertWithoutEvolutionInput", {})
export class GendersUpsertWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => GendersUpdateWithoutEvolutionInput, {
    nullable: false
  })
  update!: GendersUpdateWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => GendersCreateWithoutEvolutionInput, {
    nullable: false
  })
  create!: GendersCreateWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => GendersWhereInput, {
    nullable: true
  })
  where?: GendersWhereInput | undefined;
}
