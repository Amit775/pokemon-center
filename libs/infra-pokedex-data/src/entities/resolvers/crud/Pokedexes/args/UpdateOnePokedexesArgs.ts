import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexesUpdateInput } from "../../../inputs/PokedexesUpdateInput";
import { PokedexesWhereUniqueInput } from "../../../inputs/PokedexesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokedexesArgs {
  @TypeGraphQL.Field(_type => PokedexesUpdateInput, {
    nullable: false
  })
  data!: PokedexesUpdateInput;

  @TypeGraphQL.Field(_type => PokedexesWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexesWhereUniqueInput;
}
