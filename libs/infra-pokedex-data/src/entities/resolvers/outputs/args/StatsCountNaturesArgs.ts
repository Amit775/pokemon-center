import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NaturesWhereInput } from "../../inputs/NaturesWhereInput";

@TypeGraphQL.ArgsType()
export class StatsCountNaturesArgs {
  @TypeGraphQL.Field(_type => NaturesWhereInput, {
    nullable: true
  })
  where?: NaturesWhereInput | undefined;
}
