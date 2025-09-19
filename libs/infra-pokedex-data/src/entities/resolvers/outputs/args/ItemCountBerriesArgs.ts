import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryWhereInput } from "../../inputs/BerryWhereInput";

@TypeGraphQL.ArgsType()
export class ItemCountBerriesArgs {
  @TypeGraphQL.Field(_type => BerryWhereInput, {
    nullable: true
  })
  where?: BerryWhereInput | undefined;
}
