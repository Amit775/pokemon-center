import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GendersUpdateWithoutEvolutionInput } from "../inputs/GendersUpdateWithoutEvolutionInput";
import { GendersWhereInput } from "../inputs/GendersWhereInput";

@TypeGraphQL.InputType("GendersUpdateToOneWithWhereWithoutEvolutionInput", {})
export class GendersUpdateToOneWithWhereWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => GendersWhereInput, {
    nullable: true
  })
  where?: GendersWhereInput | undefined;

  @TypeGraphQL.Field(_type => GendersUpdateWithoutEvolutionInput, {
    nullable: false
  })
  data!: GendersUpdateWithoutEvolutionInput;
}
