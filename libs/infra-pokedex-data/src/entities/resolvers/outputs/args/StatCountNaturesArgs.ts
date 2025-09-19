import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureWhereInput } from "../../inputs/NatureWhereInput";

@TypeGraphQL.ArgsType()
export class StatCountNaturesArgs {
  @TypeGraphQL.Field(_type => NatureWhereInput, {
    nullable: true
  })
  where?: NatureWhereInput | undefined;
}
