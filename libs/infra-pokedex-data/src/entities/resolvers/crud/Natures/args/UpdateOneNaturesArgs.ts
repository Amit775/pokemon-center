import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NaturesUpdateInput } from "../../../inputs/NaturesUpdateInput";
import { NaturesWhereUniqueInput } from "../../../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneNaturesArgs {
  @TypeGraphQL.Field(_type => NaturesUpdateInput, {
    nullable: false
  })
  data!: NaturesUpdateInput;

  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: false
  })
  where!: NaturesWhereUniqueInput;
}
