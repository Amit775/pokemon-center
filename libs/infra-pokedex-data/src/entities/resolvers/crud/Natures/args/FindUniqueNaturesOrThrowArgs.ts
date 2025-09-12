import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NaturesWhereUniqueInput } from "../../../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueNaturesOrThrowArgs {
  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: false
  })
  where!: NaturesWhereUniqueInput;
}
