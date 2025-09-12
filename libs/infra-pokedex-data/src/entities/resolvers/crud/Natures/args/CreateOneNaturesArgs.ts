import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NaturesCreateInput } from "../../../inputs/NaturesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneNaturesArgs {
  @TypeGraphQL.Field(_type => NaturesCreateInput, {
    nullable: false
  })
  data!: NaturesCreateInput;
}
