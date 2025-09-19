import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationWhereInput } from "../../inputs/GenerationWhereInput";

@TypeGraphQL.ArgsType()
export class RegionCountGenerationsArgs {
  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;
}
