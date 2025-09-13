import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationsWhereInput } from "../../inputs/GenerationsWhereInput";

@TypeGraphQL.ArgsType()
export class RegionsCountGenerationsArgs {
  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;
}
