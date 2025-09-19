import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenderUpdateWithoutEvolutionInput } from "../inputs/GenderUpdateWithoutEvolutionInput";
import { GenderWhereInput } from "../inputs/GenderWhereInput";

@TypeGraphQL.InputType("GenderUpdateToOneWithWhereWithoutEvolutionInput", {})
export class GenderUpdateToOneWithWhereWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => GenderWhereInput, {
    nullable: true
  })
  where?: GenderWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenderUpdateWithoutEvolutionInput, {
    nullable: false
  })
  data!: GenderUpdateWithoutEvolutionInput;
}
