import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsUpdateWithoutPokedexesInput } from "../inputs/RegionsUpdateWithoutPokedexesInput";
import { RegionsWhereInput } from "../inputs/RegionsWhereInput";

@TypeGraphQL.InputType("RegionsUpdateToOneWithWhereWithoutPokedexesInput", {})
export class RegionsUpdateToOneWithWhereWithoutPokedexesInput {
  @TypeGraphQL.Field(_type => RegionsWhereInput, {
    nullable: true
  })
  where?: RegionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionsUpdateWithoutPokedexesInput, {
    nullable: false
  })
  data!: RegionsUpdateWithoutPokedexesInput;
}
