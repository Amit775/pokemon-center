import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexesCreateManyInput } from "../../../inputs/PokedexesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokedexesArgs {
  @TypeGraphQL.Field(_type => [PokedexesCreateManyInput], {
    nullable: false
  })
  data!: PokedexesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
